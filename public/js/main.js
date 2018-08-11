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

createAppSkeleton()