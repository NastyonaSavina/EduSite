"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[720],{194:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var a=i(439),r=i(791),n=JSON.parse('[{"id":"id-1","title":"Science - Beginning With Physics!","description":"This course will introduce you to some fundamental topics in Physics, including Forces and Energy.","category":"Physics","level":"Beginner","imageUrl":""},{"id":"id-2","title":"Superfast Physics for 14 to 16 year olds","description":"Catchy memory tricks and hundreds of practice questions","category":"Physics","level":"Intermediate","imageUrl":""},{"id":"id-3","title":"Relativistic Quantum Mechanics: Spin & Dirac Equation","description":"Mathematical Intuition behind Relativistic Quantum Mechanics","category":"Physics","level":"Advanced","imageUrl":""},{"id":"id-4","title":"Pre-Algebra Explained","description":"Master Pre-Algebra with 700 Practice Questions! Prepare for High School Math: Algebra, Geometry, Trigonometry","category":"Mathematics","level":"Beginner","imageUrl":""},{"id":"id-5","title":"Algebra 1 Explained","description":"Master Algebra 1 with our Step by Step Video Tutorials and Practice with 1000 Practice Questions! Ace your Algebra Exam!","category":"Mathematics","level":"Intermediate","imageUrl":""},{"id":"id-6","title":"College Algebra, Pre-Calculus, & Trigonometry Explained","description":"Master College Level Algebra with our Step by Step Video Tutorials. Over 4500 Practice Questions! Ace your Algebra Exam!","category":"Mathematics","level":"Advanced","imageUrl":""},{"id":"id-7","title":"Astrological Forecasting for Everyone","description":"Learn to write popular astrological forecasts competently and confidently","category":"Astrology","level":"Beginner","imageUrl":""},{"id":"id-8","title":"Learn Vedic Astrology Part 3","description":"Learn more astronomy for astrologers, planetary states and their relationships, and how to derive the natal chart \u201cBacks","category":"Astrology","level":"Intermediate","imageUrl":""},{"id":"id-9","title":"Learn Vedic Astrology Part 2","description":"Learn how identify Graha Yogas","category":"Astrology","level":"Intermediate","imageUrl":""},{"id":"id-10","title":"Esoteric Astrology - The Astrology of The Soul","description":"The Zodiac, Karma & Reincarnation","category":"Astrology","level":"Advanced","imageUrl":""}]'),s=i(87),l=i(184),c=function(e){var t=e.value,i=e.onChange;return(0,l.jsx)("section",{className:"search-box",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("input",{className:"search-form-input",type:"text",value:t,onChange:function(e){e.preventDefault(),i(e.target.value)},placeholder:"Search course by name "})})})},o=function(e){var t=e.onChangeCategory,i=e.onChangeLevel,a=function(e){e.preventDefault(),t(e.target.name)},r=function(e){e.preventDefault(),i(e.target.name)};return(0,l.jsx)("section",{className:"selection-panel ",children:(0,l.jsxs)("div",{className:"container selection-area",children:[(0,l.jsx)("div",{className:"select-category",children:(0,l.jsxs)("ul",{className:"list category-list",children:[(0,l.jsx)("li",{className:"course-category-item",children:(0,l.jsx)("button",{className:"category-btn",name:"Physics",type:"button",onClick:a,children:"Physics"})}),(0,l.jsx)("li",{className:"course-category-item",children:(0,l.jsx)("button",{className:"category-btn ",name:"Mathematics",type:"button",onClick:a,children:"Mathematics"})}),(0,l.jsx)("li",{className:"course-category-item",children:(0,l.jsx)("button",{className:"category-btn ",name:"Astrology",type:"button",onClick:a,children:"Astrology"})})]})}),(0,l.jsx)("div",{className:"select-level",children:(0,l.jsxs)("ul",{className:"level-list",children:[(0,l.jsx)("li",{className:"course-category-item",children:(0,l.jsx)("button",{className:"level-btn",name:"Beginner",type:"button",onClick:r,children:"Beginner"})}),(0,l.jsx)("li",{className:"course-category-item",children:(0,l.jsx)("button",{className:"level-btn",name:"Intermediate",type:"button",onClick:r,children:"Intermediate"})}),(0,l.jsx)("li",{className:"course-category-item",children:(0,l.jsx)("button",{className:"level-btn",name:"Advanced",type:"button",onClick:r,children:"Advanced"})})]})})]})})},d=i.p+"static/media/physics2.821a9109536d85252361.png",u=function(e){var t=e.title,i=e.description;e.imageUrl;return(0,l.jsxs)("li",{className:"course-item",children:[(0,l.jsx)("img",{className:"course-foto",src:d,alt:t}),(0,l.jsx)("h3",{className:"course-title",children:t}),(0,l.jsx)("p",{children:i})]})},g=function(e){var t=e.courses;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:"courses-list container list",children:null===t||void 0===t?void 0:t.map((function(e,t){var i=e.id,a=e.title,r=e.description,n=e.imageUrl;return(0,l.jsx)(u,{title:a,description:r,imageUrl:n,index:t},i)}))})})},m=function(){var e,t=(0,r.useState)(n),i=(0,a.Z)(t,2),d=i[0],u=i[1],m=(0,r.useState)(""),h=(0,a.Z)(m,2),y=h[0],p=h[1],v=(0,r.useState)(""),f=(0,a.Z)(v,2),x=f[0],b=f[1],j=(0,s.lr)(""),A=(0,a.Z)(j,2),N=A[0],C=A[1],P=null!==(e=N.get("query"))&&void 0!==e?e:"";(0,r.useEffect)((function(){var e=n.filter((function(e){return y?e.category===y:e.category})).filter((function(e){return P?e.title.toLowerCase().includes(P.toLowerCase()):e})).filter((function(e){return x?e.level===x:e.level}));u(e)}),[y,P,x]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{onChangeCategory:function(e){p(e),C(""),b("")},onChangeLevel:function(e){b(e),C("")}}),(0,l.jsx)(c,{value:P,onChange:function(e){C(""!==e?{query:e}:{})}}),(0,l.jsx)(g,{courses:d})]})}}}]);
//# sourceMappingURL=720.c9d51c41.chunk.js.map