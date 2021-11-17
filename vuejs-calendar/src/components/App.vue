<template>
    <div>
        <div v-for="week in weeks">
            Week
            <div v-for="day in week">{{ day }}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                month: 2,
                year: 2017
            };
        },
        computed: {
            days(){
                //Generating every day in the current month
                let days = [];
                let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
                do {
                    days.push(currentDay);
                    currentDay = this.$moment(currentDay).add(1, 'days');
                } while ((currentDay.month() + 1) === this.month);

                // Add pervious days to start
                currentDay = this.$moment(days[0]);
                const SUNDAY = 0;
                const MONDAY = 1;

                if(currentDay.days() !== MONDAY){
                    do {
                        currentDay = this.$moment(currentDay).subtract(1, 'days');
                        days.unshift(currentDay);
                    } while (currentDay.day() !== MONDAY);
                }

                // Add following days to end
                currentDay = this.$moment(days[days.length - 1]);

                if(currentDay.days() !== SUNDAY){
                    do {
                        currentDay = this.$moment(currentDay).add(1, 'days');
                        days.push(currentDay);
                    } while (currentDay.days() !== SUNDAY);
                }

                return days;
            },
            weeks(){
                let weeks = [];
                let week = [];

                for(let day of this.days){
                    week.push(day);
                    if(week.length == 7){
                        weeks.push(week);
                        week = [];
                    }
                }

                return weeks;
            }
        },
        created() {
            console.log(this.$moment);
        }
    }
</script>