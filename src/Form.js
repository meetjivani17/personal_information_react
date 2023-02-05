import React from "react";
import "./form.css";

const Form = () => {
    return (
        <>
            <div className="outer">
                <form method="post" action="" >
                    <lable>UDISE no. <input name="UDISE" type='text' placeholder="Enter your UDISE no." required /></lable>

                    <lable>Adhar Card no. <input name="adhar" type='text' placeholder="Enter your adhar no." required /></lable>

                    <lable>Name <input name="name" type='text' placeholder="Enter your Name" required /></lable>

                    <lable>Gender <select name="gender" >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Others</option>
                    </select></lable>

                    <lable>Age <input name="age" type='text' placeholder="Enter your age" required /></lable>

                    <lable>Address <input name="address" type='text' placeholder="Enter your address" required /></lable>

                    <lable>Taluka <input name="taluka" type='text' placeholder="Enter your taluka" required /></lable>

                    <lable>District <input name="district" type='text' placeholder="Enter your district" required /></lable>

                    <lable>Mobile no. <input name="mobile" type='text' placeholder="Enter your mobile" required /></lable>

                    <lable>Special teacher name <input name="teacher" type='text' placeholder="Enter your Special teacher name" required /></lable>

                    <lable>Special teacher no. <input name="teacher_number" type='text' placeholder="Enter your Special teacher no." required /></lable>

                    <lable>Height of child <input name="height" type='text' placeholder="Enter your height" required /></lable>

                    <lable>Weight of child <input name="weight" type='text' placeholder="Enter your weight" required /></lable>

                    <lable>Father name <input name="father_name" type='text' placeholder="Enter your Father name" required /></lable>

                    <lable>Father occupation <input name="father_occupation" type='text' placeholder="Enter your Father occupation" required /></lable>

                    <lable>Mother name <input name="mother_name" type='text' placeholder="Enter your Mother name" required /></lable>

                    <lable>Mother occupation <input name="mother_occupation" type='text' placeholder="Enter your Mother occupation" required /></lable>

                    <lable>Birth Type Of Child <input name="birth_type_of_child" type='text' placeholder="Enter your Birth type of child" required /></lable>

                    <lable>Birth Type Of Child  <input name="birth_type_of_child" type='text' placeholder="Enter your Birth type of child" required /></lable>

                    <lable>Any other Disebility <input name="any_other_disebility" type='text' placeholder="Enter your any other disebility" required /></lable>

                    <lable>Type of Hearing loss <input name="type_of_hearing_loss" type='text' placeholder="Enter your type of hearing loss" required /></lable>

                    <lable>Hearing Test Report <input name="hearing_test_report" type='text' placeholder="Enter your Hearing Test Report" required /></lable>

                    <lable>Device Responce <input name="device_response" type='text' placeholder="Enter your Device Responce" required /></lable>

                    <lable>Music Responce <input name="music_response" type='text' placeholder="Enter your Music Responce" required /></lable>

                    <lable>Hearnu Responce <input name="hearnu_response" type='text' placeholder="Enter your Hearnu Responce" required /></lable>

                    <lable>Speech Therapy Responce <input name="speed_therapy_response" type='text' placeholder="Enter your speech therapy Responce" required /></lable>

                    <lable>Photo  <input name="photo" type='file' required /></lable>

                    <lable>How we confirm child can hear? <input name="confirm" type='text' placeholder="Write somthing..." required /></lable>

                    <lable>Medical Certificates <input name="medical_certificates" type='file' required /></lable>

                    <lable>Income Certificates <input name="income_certificates" type='file' required /></lable>

                    <lable>Hearing Progress lavel <select name="hearing_progress" >
                        <option value="0">Device Active mode hearing started. Ease in wearing, charging, holding</option>
                        <option value="1">Started Hearing - Music, sharing expressions</option>
                        <option value="2">Responding on calling and basic word hearing</option>
                        <option value="3">Hearing and understaing full sentances</option>
                    </select></lable>
                    <lable>Speaking Progress lavel <select name="speaking" >
                        <option value="0">Started Expressing by facial, happy moments - First word of speech</option>
                        <option value="1">Trying to repeat word they hear</option>
                        <option value="2">key words of few letters - Maa(mother), Pappa(Father), as primtive step for inclusive of socity</option>
                        <option value="3">Answering on few question in multiple words</option>
                    </select></lable>

                    <button className="btn">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form;