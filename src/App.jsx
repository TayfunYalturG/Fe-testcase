import { employeeData } from './assets/data'

function App() {
  return (
    <div className='table_container'>
      {
        employeeData.map((employee) => (<div key={employee.id} className='employee_card'>
          <div className='employee_info'>
            <div className='employee_card_name'>
              {`${employee.name} ${employee.surname}`}
            </div>
            <div className='employee_card_number'>
              {employee.phoneNumber}
            </div>
            <div className='employee_card_email'>
              {employee.email}
            </div>
          </div>
          <div className='employee_buttons'>
            <button>Detaylar</button>
            <button>Sil</button>
          </div>
        </div>)
        )
      }
    </div>
  )
}

export default App