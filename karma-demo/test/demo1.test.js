import {expect} from 'chai';
import {assert} from 'chai';
var addClass = require('../src/demo1/page.js');
describe("颜色变化测试", function(){
    
    it("颜色变化", function(){
        var classTest = "slider",
            changeClass = addClass(classTest,'sliderBlue');
        expect(changeClass).to.be.equal('slider sliderBlue') 

        // assert 、 assert.ok 和 assert.equal 相同 ，都是==;
        assert(changeClass == 'slider sliderBlue','slider和sliderBlue 等于 slider slderBlue')
        assert.ok(changeClass == 'slider sliderBlue','slider sliderBlue')
        assert.equal(changeClass,'slider sliderBlue') 

        // assert.strictEqual 是 === ;
        assert.strictEqual(changeClass,'slider sliderBlue')
    });
});

// // suite('addClass',function(){
// //     it('',function(){

// //     })
// // })

