const express =require("express")

const reg=new express()
reg.use(express.json());

const studArray=[
    {name:"Anu",age:20,id:"VMAXSCS01,",dept:"cs"},
    {name:"Anju",age:20,id:"VMAXSCS02,",dept:"cs"},
    {name:"Amitha",age:20,id:"VMAXSCS03,",dept:"cs"},
    {name:"Maya",age:20,id:"VMAXSCS04,",dept:"cs"},
    {name:"Miya",age:20,id:"VMAXSCS05,",dept:"cs"}

];
reg.get('/view',(req,res)=>{
   res.send(studArray)
})
reg.put('/edit',(req,res)=>{
    studArray.splice(1,1,req.body)
    res.send("updated successfully")
})
reg.listen(7070,()=>{
    console.log("port is running..")
})