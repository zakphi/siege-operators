import operators from '../data/operators.js'

console.log(operators)

function createAppSkeleton(){
  let container = document.createElement('div')
  container.id = 'container'

  let filterControls = document.createElement('div')
  filterControls.id = 'filterControls'

  let operatorsContainer = document.createElement('div')
  operatorsContainer.id = 'operators'

  container.appendChild(filterControls)
  container.appendChild(operatorsContainer)
  document.body.appendChild(container)
}

function renderFilterControls(){
  let atkBtn = document.createElement('button')
  atkBtn.id = 'atkBtn'
  atkBtn.innerText = 'attackers'

  let defBtn = document.createElement('button')
  defBtn.id = 'defBtn'
  defBtn.innerText = 'defenders'

  let unitsDropdown = document.createElement('select')
  unitsDropdown.id = 'units'

  let uniqueUnits = [...new Set(operators.map(operator => operator.unit))]
  console.log(uniqueUnits)
  uniqueUnits.map(uniqueUnit => {
    let unitOption = document.createElement('option')
    unitOption.value = uniqueUnit
    unitOption.text = uniqueUnit
    unitsDropdown.appendChild(unitOption)
  })

  let filterControls = document.querySelector('#filterControls')

  filterControls.appendChild(atkBtn)
  filterControls.appendChild(defBtn)
  filterControls.appendChild(unitsDropdown)
}

function renderOperators(){
  let operator = document.createElement('div')
  operator.className = 'operator'

  let operatorsContainer = document.querySelector('#operators')

  operators.map(operator => {
    let operatorContainer = document.createElement('div')
    operatorContainer.className = 'operator'
    operatorContainer.innerText = operator.name

    operatorsContainer.appendChild(operatorContainer)
  })
}

createAppSkeleton()
renderFilterControls()
renderOperators()