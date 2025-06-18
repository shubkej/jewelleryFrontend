const EMPLOYEES_API_ENDPOINTS = {
  // GET: "/employee/emp",
  GET: "/employee/fetchAllEmployee",
  DELETE: "/employee/deleteEmployee",
  POST: "/employee/createEmployee",
  PUT: "/employee/updateEmployee",
  FETCH_EMPLOYEENAME: "/employee/fetchEmployeesByName",
  ASSIGN_EMPLOYEETO: "/assign/createAssignEmployee",
  FETCHFEEDBACKEMPLOYEE: "/feedbackform/fetchFeedbackForm",
  CREATEDFEEDBACKEMPLOYEEREVIEW: "/feedbackform/AddFeedbackByRoleForms",
  FETCH_PAGINATIONEMPLOYEE: "/employee/fetchAllEmployee?page=1&limit=3",
  FETCH_EXCELDATA:"/employee/getEmployeeReviewDetails/67651b4a1937a7619ae4b0a4",
  FETCHFEEDBACKFORMREVIWERID:"/feedback/fetchFeedbackByReviewerId",
  UPDATEFEEDBACK:"/feedback/updateFeedback",
 
};

export default EMPLOYEES_API_ENDPOINTS;
