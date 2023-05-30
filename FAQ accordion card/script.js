const membersAnswer = document.querySelector(".membersAnswer")
const maxFileAnswer = document.querySelector(".maxFileAnswer")
const passAnswer = document.querySelector(".passAnswer")
const subAnswer = document.querySelector(".subAnswer")
const addSuppAnswer = document.querySelector(".addSuppAnswer")
const teamMembers = document.querySelector(".teamMembers")
const maxFile = document.querySelector(".maxFile")
const password = document.querySelector(".password")
const subscription = document.querySelector(".subscription")
const addSupp = document.querySelector(".addSupp")
teamMembers.addEventListener("click", function(){
    membersAnswer.textContent = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    teamMembers.style.fontWeight = "700"
    membersAnswer.style.fontWeight = "200"
    teamMembers.addEventListener("click", function(){
        membersAnswer.textContent = ""
    })
    })
maxFile.addEventListener("click", function(){
    maxFileAnswer.textContent = "No more than 2GB. All files in your account must fit your allotted storage space."
    maxFile.style.fontWeight = "700"
    maxFileAnswer.style.fontWeight = "200"
    maxFile.addEventListener("click", function(){
        maxFileAnswer.textContent = ""
})
})
password.addEventListener("click", function(){
    passAnswer.textContent = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    password.style.fontWeight = "700"
    passAnswer.style.fontWeight = "200"
    password.addEventListener("click", function(){
        passAnswer.textContent = ""
    })
})
subscription.addEventListener("click", function(){
    subAnswer.textContent = "Yes! Send us a message, and we’ll process your request no questions asked."
    subscription.style.fontWeight = "700"
    subAnswer.style.fontWeight = "200"
    subscription.addEventListener("click", function(){
        subAnswer.textContent = ""
    })
})
addSupp.addEventListener("click", function(){
    addSuppAnswer.textContent = "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    addSupp.style.fontWeight = "700"
    addSuppAnswer.style.fontWeight = "200"
    addSupp.addEventListener("click", function(){
        addSuppAnswer.textContent = ""
    })
})
