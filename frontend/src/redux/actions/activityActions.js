import axios from 'axios'

const activityActions = {

    getActivities: (idItinerary) =>{
        //   console.log(idItinerary)
        return async (dispatch, getState) => {
            try{
                const res = await axios.get('https://mytinerary-coquimbo.herokuapp.com/api/activity/'+idItinerary)
                // console.log(res)
                return  res.data.response
            }catch(err){
                return {
                    success: false, response:err  
                }
            }
            
        }
    },    


}
export default activityActions