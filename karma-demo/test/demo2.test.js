// import {expect} from 'chai';
// import {assert} from 'chai';
// var fetch = require('node-fetch');
// var test = require('../src/demo2/page.js');

// describe('同步测试',function(){
//     // this.timeout(0)
//     it('同步',function(){
//         var number = test.add(2,3),
//             filtesN;
//         filtesN = test.filter('2');
//         // setTimeout(function(){
            
//         //     expect(filtesN).to.be.eql(['2']);
//         //     done()
//         // },3000);
        
//         expect(number).to.be.equal(5);
//         console.log(filtesN);
//         expect(filtesN).to.be.eql(['2']); //会失败
//         //eql() //等于 deep.equal()
//     })

//     it('测试应该5000毫秒后结束', function(done) {
//         var x = true;
//         var f = function() {
//           x = false;
//           expect(x).to.be.not.ok;
//           done(); // 通知Mocha测试结束
//         };
//         setTimeout(f, 1000);
//         expect(x).to.be.ok;
//     });

//     it('异步请求应该返回一个对象', function() {
//         return fetch('https://api.github.com')
//           .then(function(res) {
//             return res.json();
//           }).then(function(json) {
//             expect(json).to.be.an('object');
//           });
//     }); // 2000ms
// })