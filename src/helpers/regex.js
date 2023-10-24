const globalRegex = {
  priorityList: ["low", "medium", "high"],
  categoryList: ["to-do", "in-progress", "done"],
  timeRegex : /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
  dateRegex: /^20[0-2][0-9]-((0[1-9])|(1[0-2]))-(0[1-9]|[1-2][0-9]|3[0-1])$/,

  emailRegexp: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/,
  phoneRegexp: /^\+\d{1,13}$/,
  birthdayRegexp: /^\d{2}\/\d{2}\/\d{4}$/,
  passwordRegexp: /^(?=.*\d)[A-Za-z\d]{6,}$/,
}

export default globalRegex