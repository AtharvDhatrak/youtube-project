class apiresponse{
    constructor(statusCode,data,message="success"){
        this.statuscode=this.statuscode 
        this.data=data
        this.message=message
        this.success=statuscode<400
    }
}