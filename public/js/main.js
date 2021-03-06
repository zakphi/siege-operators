import operators from '../data/operators.js'

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
  atkBtn.innerText = 'attacker'

  let defBtn = document.createElement('button')
  defBtn.id = 'defBtn'
  defBtn.innerText = 'defender'

  let unitsDropdown = document.createElement('select')
  unitsDropdown.id = 'units'

  unitsDropdown.options.add( new Option('units', 'units') )

  let uniqueUnits = [...new Set(operators.map(operator => operator.unit))]
  uniqueUnits.map(uniqueUnit => {
    unitsDropdown.options.add( new Option(uniqueUnit, uniqueUnit) )
  })

  let filterControls = document.querySelector('#filterControls')

  filterControls.appendChild(atkBtn)
  filterControls.appendChild(defBtn)
  filterControls.appendChild(unitsDropdown)
}

function renderOperators(filteredOperators, filter = false){
   let operatorsContainer = document.querySelector('#operators')

  let operatorsToRender = filter === false ? operators : filteredOperators

  if(filter){
    while(operatorsContainer.firstChild){
      operatorsContainer.removeChild(operatorsContainer.firstChild)
    }
  }

  operatorsToRender.map(operator => {
    let operatorContainer = document.createElement('div')
    operatorContainer.className = 'operator'
    operatorContainer.innerText = operator.name

    operatorsContainer.appendChild(operatorContainer)
  })
}

function filterOperators(){
  let positionBtns = document.querySelectorAll('button')

  let posFilteredOps = []
  let unitFilteredOps = []

  positionBtns.forEach(posBtn => posBtn.addEventListener('click', () => {
    posFilteredOps = operators.filter(operator => operator.position === posBtn.innerText)
    renderOperators(posFilteredOps, true)
  }))

  let unitsDropdown = document.querySelector('#units')
  unitsDropdown.addEventListener('change', () => {
    let unit = document.querySelector('#units option:checked').value
    unitFilteredOps = operators.filter(operator => operator.unit === unit )
    unitFilteredOps.length ? unitFilteredOps = unitFilteredOps : unitFilteredOps = operators
    renderOperators(unitFilteredOps, true)
  })
}

createAppSkeleton()
renderFilterControls()
renderOperators()
filterOperators()