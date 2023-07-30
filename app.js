var app = new Vue({
    el: '#app',
    data: function() {
        return {
            selectedOption: null,
            fullScreenMessage: '',
            fullScreenSubMessage: ''
        }
    },
    methods: {
        optionSelected: function(option) {
            this.selectedOption = option;
            if (option === 'yes') {
                this.fullScreenMessage = 'Absolutely stellar decision!';
                this.fullScreenSubMessage = 'I can\'t believe I went from single to married in such a short period of time! Life really CAN take a 180 :D';
            } else {
                this.fullScreenMessage = 'Oh well... ';
                this.fullScreenSubMessage = 'I didn\'t like you that much anyway :/';
            }
        },
        updateTitleColor: function() {
            var title = this.$refs.title;
            var chars = title.children;
            for (var i = 0; i < chars.length; i++) {
                var rect = chars[i].getBoundingClientRect();
                var color = rect.left + rect.width / 2 < window.innerWidth / 2 ? '#212121' : '#C3B1E1';
                var shadowColor = rect.left + rect.width / 2 < window.innerWidth / 2 ? '#C3B1E1' : '#212121';
                chars[i].style.color = color;
                chars[i].style.textShadow = `-1px 0 ${shadowColor}, 0 1px ${shadowColor}, 1px 0 ${shadowColor}, 0 -1px ${shadowColor}`;
            }
        }              
    },
    mounted: function() {
        this.updateTitleColor();
        window.addEventListener('resize', this.updateTitleColor);
    },
    beforeDestroy: function() {
        window.removeEventListener('resize', this.updateTitleColor);
    }
});
