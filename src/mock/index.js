import { Mock } from 'mockjs';

Mock.mock('/user/query', 'get', {
  code: 0,
  data: [
    {
      name: 'hanmo',
      age: 18,
    },
    {
      name: 'zengye',
      age: 19,
    },
  ],
});
