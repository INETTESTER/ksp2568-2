import http from 'k6/http';

export function createCustomer(cid) {
    const CustomerID = `${__VU}${__ITER}`+cid;
    const url = 'https://ksp2568-2.thaijobjob.com/api/v2/reg/customer';

    const payload = JSON.stringify({
        data: {
            CustomerID: ""+CustomerID,
            TestLang: "1",
            Name1: "นาย",
            Name2: "ทดสอบชื่อ",
            Name3: "ทดสอบสกุล",
            Gender: "ชาย",
            Name1EN: "MR.",
            Name2EN: "TEST1",
            NameMidEN: null,
            Name3EN: "TEST2",
            BirthDMY: "02-08-2542",
            NationalityID: "1",
            Nationality: "ชาวไทย",
            TelMobile: "0800000000",
            Email: "test@gmail.com",
            Degree: "ประกาศนียบัตรบัณฑิตวิชาชีพครู",
            StatusStudy: "กำลังศึกษาอยู่ Studying",
            Grade: "ชั้นปีที่ 3 3rd Year Student",
            Major: "วิชาชีพครู",
            University: "มหาวิทยาลัยการจัดการและเทคโนโลยีอีสเทิร์น",
            DateIn: "2561",
            Address: "16",
            Soi: null,
            Road: null,
            District: "เก่าขาาม",
            Amphur: "น้ำยืน",
            Province: "กาฬสินธุ์",
            Zipcode: "46000",
            SpecialNeeds: "ไม่มีความต้องการพิเศษ No Special Needs",
            FileImg: "pic/FileImg.1469900472909.jpeg"
        },
        datafile: {
            FileImg: "pic/FileImg.1469900472909.jpeg"
        }
    });

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.oASG2YhYW3rNrCPzCSA8Rm1qaGCnjtkZvYuNWO_SoUM'
    };

    const res = http.post(url, payload, { headers });

    //console.log('Response body:\n' + res.body);


    return res;
}
