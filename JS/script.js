/*jslint browser: true, indent: 4 */
document.addEventListener('DOMContentLoaded', function () {

    "use strict";
    var Init = {

        init: function () {

            var string = document.getElementById('string'),
                that = this;

            function attachTextListener(input, func) {

                if (window.addEventListener) {

                    input.addEventListener('input', func, false);

                } else {

                    input.attachEvent('onpropertychange', function () {

                        func.call(input);

                    });
                }
            }

            attachTextListener(string, function () {

                if (this.value.match(/^[a-zA-Z]/g)) {
                
                    var str = this.value.replace(/(^\s+|^[0-9])/g, '').replace(/\s{2}/g, ' ');
                    this.value = str;
                    that.traitement(str);

                } else {

                    this.value = '';
                    that.traitement(this.value);

                }

            });

        },

        traitement: function (value) {

            var that = this,
                data = "string=" + value,
                xhr = new XMLHttpRequest();

            if (window.XMLHttpRequest) {

                xhr.open('POST', 'PHP/traitement.php', true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(data);
                xhr.addEventListener('readystatechange', function () {

                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {

                        that.display(JSON.parse(this.response));

                    }

                }, false);

            }

        },

        display: function (e) {

            var number = document.getElementById('number'),
                nbCharacters = document.getElementById('nbCharacters');

            number.innerHTML = e.number;
            nbCharacters.innerHTML = e.nbCharacters;

        }


    };

    Init.init();

});