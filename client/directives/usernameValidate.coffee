angular.module('ngMeteor').directive 'usernameValidate', ->
  require: 'ngModel',
  link: (scope, el, attrs, ctrl) ->
    ctrl.$parsers.unshift (viewValue) ->
      scope.usrValidLength = viewValue && viewValue.length > 1 && viewValue.length  < 16  ? 'valid' : undefined
      scope.usrNoSpaces = viewValue && /^[\S]*$/.test viewValue ? 'valid' : undefined

      if scope.usrValidLength && scope.usrNoSpaces
        ctrl.$setValidity 'usr', true
        return viewValue
      else
        ctrl.$setValidity 'usr', false
        return undefined