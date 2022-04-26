import axios from 'axios';

const api = axios.create();

const getToken = async () => {
  const url = process.env.URL_LOGIN;
  const body = {
    drvrLastName: process.env.drvrLastName,
    licenceNumber: process.env.licenceNumber,
    keyword: process.env.keyword,
  };
  const res = await api.put(url, body);
  const { authorization } = res.headers;
  api.defaults.headers.Authorization = authorization;
};

const getAvailable = async () => {
  const url = process.env.URL_APPOINTMENTS;

  const body = {
    aPosID: 2,
    examType: '5-R-1',
    examDate: '2022-03-25',
    ignoreReserveTime: false,
    prfDaysOfWeek: '[0,1,2,3,4,5,6]',
    prfPartsOfDay: '[0,1]',
    lastName: process.env.drvrLastName,
    licenseNumber: process.env.licenceNumber,
  };
  const res = await api.post(url, body);
  return res.data;
};

const run = async () => {
  await getToken();
  if (api.defaults.headers.Authorization) {
    return getAvailable();
  }
  return '';
};

export default run;
