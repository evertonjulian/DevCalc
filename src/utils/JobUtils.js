module.exports = {
    remainingDays(job){
        return 999
    },
    
    calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}