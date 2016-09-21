(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

/**
 * Created by zncy on 2016/9/21.
 */
var MainScene = function () {
    function MainScene() {
        classCallCheck(this, MainScene);


        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
        this.camera.position.z = 1000;
        this.camera.lookAt(this.scene.position);
        this.render = new THREE.WebGLRenderer();
        this.render.setSize(window.innerWidth, window.innerHeight);

        this.box = new THREE.BoxGeometry(100, 100, 100);
        this.material = new THREE.MeshBasicMaterial({
            color: 0xffffff
        });
        this.mesh = new THREE.Mesh(this.box, this.material);
        this.scene.add(this.mesh);

        document.body.appendChild(this.render.domElement);
    }

    createClass(MainScene, [{
        key: "draw",
        value: function draw() {
            var self = this;
            function r() {
                requestAnimationFrame(r);
                self.render.render(self.scene, self.camera);
            }
            r();
        }
    }]);
    return MainScene;
}();

/**
 * Created by zncy on 2016/9/21.
 */

var mainScene = new MainScene();
mainScene.draw();

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluU2NlbmUuanMiLCIuLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSB6bmN5IG9uIDIwMTYvOS8yMS5cclxuICovXHJcbmNsYXNzIE1haW5TY2VuZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNjAsMSwxLDEwMDAwKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcclxuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQodGhpcy5zY2VuZS5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAwLDEwMCwxMDApO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjoweGZmZmZmZlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuYm94LHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubWVzaCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIuZG9tRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBmdW5jdGlvbiByKCl7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyKTtcclxuICAgICAgICAgICAgc2VsZi5yZW5kZXIucmVuZGVyKHNlbGYuc2NlbmUsc2VsZi5jYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluU2NlbmU7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgem5jeSBvbiAyMDE2LzkvMjEuXHJcbiAqL1xyXG5cclxuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9NYWluU2NlbmVcIjtcclxuXHJcbmxldCBtYWluU2NlbmUgPSBuZXcgTWFpblNjZW5lKCk7XHJcbm1haW5TY2VuZS5kcmF3KCk7Il0sIm5hbWVzIjpbIk1haW5TY2VuZSIsInNjZW5lIiwiVEhSRUUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwibG9va0F0IiwicmVuZGVyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJib3giLCJCb3hHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJtZXNoIiwiTWVzaCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzZWxmIiwiciIsIm1haW5TY2VuZSIsImRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7SUFHTUE7eUJBRVc7Ozs7YUFFSkMsS0FBTCxHQUFhLElBQUlDLE1BQU1DLEtBQVYsRUFBYjthQUNLQyxNQUFMLEdBQWMsSUFBSUYsTUFBTUcsaUJBQVYsQ0FBNEIsRUFBNUIsRUFBK0IsQ0FBL0IsRUFBaUMsQ0FBakMsRUFBbUMsS0FBbkMsQ0FBZDthQUNLRCxNQUFMLENBQVlFLFFBQVosQ0FBcUJDLENBQXJCLEdBQXlCLElBQXpCO2FBQ0tILE1BQUwsQ0FBWUksTUFBWixDQUFtQixLQUFLUCxLQUFMLENBQVdLLFFBQTlCO2FBQ0tHLE1BQUwsR0FBYyxJQUFJUCxNQUFNUSxhQUFWLEVBQWQ7YUFDS0QsTUFBTCxDQUFZRSxPQUFaLENBQW9CQyxPQUFPQyxVQUEzQixFQUFzQ0QsT0FBT0UsV0FBN0M7O2FBRUtDLEdBQUwsR0FBVyxJQUFJYixNQUFNYyxXQUFWLENBQXNCLEdBQXRCLEVBQTBCLEdBQTFCLEVBQThCLEdBQTlCLENBQVg7YUFDS0MsUUFBTCxHQUFnQixJQUFJZixNQUFNZ0IsaUJBQVYsQ0FBNEI7bUJBQ2xDO1NBRE0sQ0FBaEI7YUFHS0MsSUFBTCxHQUFZLElBQUlqQixNQUFNa0IsSUFBVixDQUFlLEtBQUtMLEdBQXBCLEVBQXdCLEtBQUtFLFFBQTdCLENBQVo7YUFDS2hCLEtBQUwsQ0FBV29CLEdBQVgsQ0FBZSxLQUFLRixJQUFwQjs7aUJBRVNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLZCxNQUFMLENBQVllLFVBQXRDOzs7OzsrQkFHRTtnQkFDRUMsT0FBTyxJQUFYO3FCQUNTQyxDQUFULEdBQVk7c0NBQ2NBLENBQXRCO3FCQUNLakIsTUFBTCxDQUFZQSxNQUFaLENBQW1CZ0IsS0FBS3hCLEtBQXhCLEVBQThCd0IsS0FBS3JCLE1BQW5DOzs7Ozs7SUFPWjs7QUNuQ0E7Ozs7QUFJQSxBQUVBLElBQUl1QixZQUFZLElBQUkzQixTQUFKLEVBQWhCO0FBQ0EyQixVQUFVQyxJQUFWOzsifQ==
