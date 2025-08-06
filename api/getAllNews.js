import http from 'k6/http';

export function getAllNews() {
    const url = 'https://ksp2568-2.thaijobjob.com/api/v2/home/news';

    const headers = {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.oASG2YhYW3rNrCPzCSA8Rm1qaGCnjtkZvYuNWO_SoUM',
    };

    const res = http.get(url, { headers });

    //console.log('Response body:\n' + res.body);


    return res;
}
