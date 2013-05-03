angular.module('ngMeteor').directive 'passwordValidate', ->
  require: 'ngModel',
  link: (scope, el, attrs, ctrl) ->
    ctrl.$parsers.unshift (viewValue) ->
      scope.pwdValidLength = viewValue && viewValue.length >= 6 ? 'valid' : undefined
      scope.pwdHasLetter = viewValue && /[A-z]/.test viewValue ? 'valid' : undefined
      scope.pwdHasNumber = viewValue && /\d/.test viewValue ? 'valid' : undefined

      if scope.pwdValidLength && scope.pwdHasLetter && scope.pwdHasNumber
        ctrl.$setValidity 'pwd', true
        return viewValue
      else
        ctrl.$setValidity 'pwd', false
        return undefined