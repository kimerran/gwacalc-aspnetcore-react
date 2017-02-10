using System.Linq;
using Microsoft.AspNetCore.Mvc;
using HashidsNet;
using GwaCalcServer.Database;

namespace GwaCalcServer.Controllers
{
    public class HomeController : Controller
    {
        private GwaCalcDbContext _ctx;
        public HomeController(GwaCalcDbContext ctx)
        {
            _ctx = ctx;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("g/{hashId}")]
        public IActionResult ViewGradeSet(string hashId)
        {
            var hashid = new Hashids("gwa-calc-server");
            var gradeSetId = hashid.Decode(hashId)[0];
            var grades = _ctx.Grades.Where(x => x.GradeSetId == gradeSetId).ToList();
            return View(grades);
        }
    }
}
