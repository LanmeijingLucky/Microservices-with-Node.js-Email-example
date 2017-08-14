// for email server connect
const smtp = {
  user:    "xxx@163.com",
  password:"xxxxxxxx",
  host:    "smtp.qiye.163.com", //smtp.qiye.163.com  25
  ssl:     true
}

// send the email
const email_message = {
  text:    "i hope this works",
  from:    "you <sender@163.com>",
  to:      "other <receiver@163.com>",
  //cc:      "else <else@your-email.com>",
  //subject: "testing emailjs",
  attachment:
             [
               {data:"<html><h3>From: </h3>i <i>hope</i> this works!</html>", alternative:true},
               //{path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"},
               {path:"pic/test.txt", type:"application/txt", name:"renamed.txt"},
               {path:"pic/login.jpg", type:"image/jpg", headers:{"Content-ID":"<login.jpg>", name: "login.jpg"}},
             ]
}

module.exports = {smtp, email_message};
