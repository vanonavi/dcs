using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Diploms.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class DepartmentsController : Controller
    {
        [HttpGet("")]
        public IEnumerable<Department> GetDepartments()
        {
            return new List<Department>{
                new Department {
                    Id = 1,
                    Name = "Информационных систем",
                    ShortName = "ИС"
                },
                new Department {
                    Id = 2,
                    Name = "Информационных технологий и компьютерных систем",
                    ShortName = "ИТиКС"
                },
                new Department {
                    Id = 3,
                    Name = "Управление в технических системах",
                    ShortName = "УВТ"
                }
            };
        }

        public class Department
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string ShortName { get; set; }
        }
    }
}