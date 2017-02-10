using GwaCalcServer.Database;
using GwaCalcServer.Models;
using HashidsNet;
using Microsoft.AspNetCore.Mvc;

namespace GwaCalcServer.Controllers
{
    [Route("api")]
    public class GradeApiController : Controller
    {
        private GwaCalcDbContext _ctx;
        public GradeApiController(GwaCalcDbContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("create")]
        public IActionResult CreateGradeSet()
        {
            var newGradeSet = new GradeSet
            {
            };

            _ctx.GradeSets.Add(newGradeSet);
            _ctx.SaveChanges();

            var grade1 = new Grade
            {
                Subject = "science",
                Unit = 1m,
                Score = 1.5m,
                GradeSetId = newGradeSet.Id
            };

            _ctx.Grades.Add(grade1);
            _ctx.SaveChanges();

            var hashid = new Hashids("gwa-calc-server");
            var id = hashid.Encode(newGradeSet.Id, 8, 2, 1988);
            return new ObjectResult(id);
        }
    }
}
