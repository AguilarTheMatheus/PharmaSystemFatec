using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PharmaSystem.DataModel.DataContext;
using PharmaSystem.DataModel.Model;
using PharmaSystem.DataModel.Model.ViewModel;
using PharmaSystem.Repository;

namespace PharmaSystem.Controllers
{
    [ApiController]
    [Route("v1")]
    public class EmployeesController : Controller
    {
        private readonly IEmployeeRepository _EmployeeRepository;

        public EmployeesController(IEmployeeRepository EmployeeRepository)
        {
            _EmployeeRepository = EmployeeRepository;
        }

        [HttpGet]
        [Route("Employee/get")]
        public async Task<IActionResult> GetAllEmployees()
        {
            var Employee = _EmployeeRepository.GetAll();
            return Ok(Employee);
        }


        [HttpGet]
        [Route("Employee/get/{Id:Guid}")]
        public async Task<IActionResult> GetEmployeeById(Guid id)
        {

            var Employee = _EmployeeRepository.Find(id);

            if (Employee == null)
            {
                return NotFound();
            }

            return Ok(Employee);
        }

        [HttpPost]
        [Route("Employee/new")]
        public async Task<IActionResult> AddEmployee(Employee Employee)
        {
            _EmployeeRepository.Add(Employee);
            return Ok(Employee);
        }

        [HttpPost]
        [Route("Employee/delete/{Id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            _EmployeeRepository.Remove(id);
            return Ok();
        }
    }
}