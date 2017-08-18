using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using People.Data;

namespace VueJSDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult People()
        {
            return View();
        }

        public ActionResult GetPeople()
        {
            var db = new PeopleRepository(Properties.Settings.Default.ConStr);
            return Json(db.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void AddPerson(Person person)
        {
            var db = new PeopleRepository(Properties.Settings.Default.ConStr);
            db.Add(person);
        }

        [HttpPost]
        public void Update(Person person)
        {
            var db = new PeopleRepository(Properties.Settings.Default.ConStr);
            db.Update(person);
        }

        [HttpPost]
        public void Delete(int personId)
        {
            var db = new PeopleRepository(Properties.Settings.Default.ConStr);
            db.Delete(personId);
        }

        [HttpPost]
        public void DeleteAll(PeopleIds ids)
        {
            var db = new PeopleRepository(Properties.Settings.Default.ConStr);
            foreach (var id in ids.PersonIds)
            {
                db.Delete(id);
            }
        }
    }

    public class PeopleIds
    {
        public int[] PersonIds { get; set; }
    }
}