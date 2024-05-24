#! urs/env/bin node
//Student Management System
/*This project is a simple console based Student Management System.
 1) In this project you will be learning how to add new students, ------- done
 2) how to generate a 5 digit unique studentID for each student,  -------- done
 3) how to enroll students in the given courses. Also,            -------- done
 4) you will be implementing the following operations enroll,
    view balance, pay tuition fees, show status, etc.             -------- done
 5) The status will show all the details of the student including name, id, courses enrolled and balance. ------- done
*/
import inquirer from "inquirer";
for (let record = 1; record <= 3; record++) {
    console.log("\n");
    console.log("--------------------------------------");
    console.log("\n");
    let studend_rollNo = Math.floor(10000 + Math.random() * 50000);
    console.log(`Student Roll No : ` + studend_rollNo);
    console.log("\n");
    let student_Name = await inquirer.prompt([
        {
            name: "student",
            type: "input",
            message: " Enter Student Name : ",
        },
    ]);
    console.log("\n");
    let studentCourse = await inquirer.prompt([
        {
            name: "courseEnroll",
            type: "list",
            choices: ["Medical", "Computer", "Fine_Arts"],
        },
    ]);
    console.log("\n");
    let medicalFee = { tuition: 25000, admission: 5000, annual: 25000 };
    let medicalTotalFee = medicalFee.tuition + medicalFee.admission + medicalFee.annual;
    let computerFee = { tuition: 15000, admission: 5000, annual: 15000 };
    let computerTotalFee = computerFee.tuition + computerFee.admission + computerFee.annual;
    let fine_ArtsFee = { tuition: 5000, admission: 5000, annual: 5000 };
    let fine_ArtsTotalFee = fine_ArtsFee.tuition + fine_ArtsFee.admission + fine_ArtsFee.annual;
    if (studentCourse.courseEnroll == "Medical") {
        console.log("Your Tuition Fee     : " + medicalFee.tuition);
        console.log("Your Admission Fee   : " + medicalFee.admission);
        console.log("Your Annual Charges  : " + medicalFee.annual);
        console.log("--------------------------------------");
        console.log("Your Total Payment is  : ", medicalTotalFee);
        console.log("\n");
        let paymentPay = await inquirer.prompt([
            { name: "payfee", type: "input", message: " Enter Paid Amount : " },
        ]);
        console.log("--------------------------------------");
        console.log("\n");
        console.log("Your Paid Fee is : ", paymentPay.payfee);
        console.log("\n");
        console.log("--------------------------------------");
        let medicalPaidAmount = medicalTotalFee - paymentPay.payfee;
        if (paymentPay.payfee <= medicalTotalFee ||
            paymentPay.payfee == medicalTotalFee) {
            console.log("\n");
            console.log("Your Balance  Fee is : ", medicalPaidAmount);
        }
        else {
            console.log("\n");
            console.log("Your Refund Amount is ", paymentPay.payfee - medicalTotalFee);
        }
        console.log("--------------------------------------");
    }
    else if (studentCourse.courseEnroll == "Computer") {
        console.log("Your Tuition Fee     : " + computerFee.tuition);
        console.log("Your Admission Fee   : " + computerFee.admission);
        console.log("Your Annual Charges  : " + computerFee.annual);
        console.log("--------------------------------------");
        console.log("Your Total Payment is  : ", computerTotalFee);
        console.log("\n");
        let paymentPay = await inquirer.prompt([
            { name: "payfee", type: "input", message: " Enter  Paid Amount   : " },
        ]);
        console.log("--------------------------------------");
        console.log("\n");
        console.log("Your Paid Fee is : ", paymentPay.payfee);
        console.log("\n");
        console.log("--------------------------------------");
        let computerPaidAmount = computerTotalFee - paymentPay.payfee;
        if (paymentPay.payfee <= computerTotalFee ||
            paymentPay.payfee == computerTotalFee) {
            console.log("\n");
            console.log("Your Balance  Fee is : ", computerPaidAmount);
        }
        else {
            console.log("\n");
            console.log("Your Refund Amount is ", paymentPay.payfee - computerTotalFee);
        }
        console.log("--------------------------------------");
    }
    else if (studentCourse.courseEnroll == "Fine_Arts") {
        console.log("Your Tuition Fee    : " + fine_ArtsFee.tuition);
        console.log("Your Admission Fee  : " + fine_ArtsFee.admission);
        console.log("Your Annual Charges : " + fine_ArtsFee.annual);
        console.log("--------------------------------------");
        console.log("Your Total Payment is  : ", fine_ArtsTotalFee);
        console.log("\n");
        let paymentPay = await inquirer.prompt([
            { name: "payfee", type: "input", message: " Enter  Paid Amount   : " },
        ]);
        console.log("--------------------------------------");
        console.log("\n");
        console.log("You Paid Fee is : ", paymentPay.payfee);
        console.log("\n");
        console.log("--------------------------------------");
        let fine_ArtsPaidAmount = fine_ArtsTotalFee - paymentPay.payfee;
        if (paymentPay.payfee <= fine_ArtsTotalFee ||
            paymentPay.payfee == fine_ArtsTotalFee) {
            console.log("\n");
            console.log("Your Balance  Fee is : ", fine_ArtsPaidAmount);
        }
        else {
            console.log("\n");
            console.log("Your Refund Amount is ", paymentPay.payfee - fine_ArtsTotalFee);
        }
        console.log("--------------------------------------");
    }
    else {
        console.log("select your course");
    }
}
;
