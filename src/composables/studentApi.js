import {ref} from 'vue';
import axios from 'axios';
import {APP_CONFIG} from "../enviroments/BaseUrl";

const url = APP_CONFIG.BASE_URL

export default function useStudent() {

    const studentData = ref([]);
    const error = ref(null);
    const statesCode = ref(null);
    const deleteError = ref(null);
    const updateError = ref(null);

    const AllStudentList = async () => {
        studentData.value = [];
        error.value = null;
        try {
            const res = await axios(`${url}/students`);
            studentData.value = res.data
        } catch (err) {
            error.value = err
        }
    };

    const singleStudent = async (id) => {
        studentData.value = [];
        error.value = null;
        try{
            const res = await axios(`${url}/students/${id}`)
            studentData.value = res.data;
        } catch (err){
            error.value = err
        }
    }

    const createStudent = async (formData) => {
        studentData.value = [];
        error.value = null;
        statesCode.value = null
        try {
            const config = {
                method: 'POST',
                url: `${url}/students`,
                headers : {
                    'Content-Type': 'Application/json'
                },
                data : JSON.stringify(formData)
            }
            const res = await axios(config);
            studentData.value = res.data;
            statesCode.value = res.status
        }catch (err) {
            error.value = err;
        }
    }

    const updateStudent = async (id , data) => {
        studentData.value = [];
        error.value = null;
        statesCode.value = null;
        try {
            const config = {
                method: 'PUT',
                url: `${url}/students/${id}`,
                headers : {
                    'Content-Type': 'Application/json'
                },
                data : JSON.stringify(data)
            }
            const res = await axios(config);
            studentData.value = res.data;
            statesCode.value = res.status;

        }catch (err) {
            updateError.value = err;
        }
    }

    const DeleteStudentDetails = async (id) => {
        studentData.value = [];
        error.value = null;
        statesCode.value = null;
        try {
            const config = {
                method: 'DELETE',
                url: `${url}/students/${id}`,
                headers : {
                    'Content-Type': 'Application/json'
                },
            }
            const res = await axios(config);
            statesCode.value = res.status
        }catch (err) {
            deleteError.value = err;
        }
    }

    return{
        studentData,
        error,
        statesCode,
        deleteError,
        updateError,
        AllStudentList,
        singleStudent,
        createStudent,
        updateStudent,
        DeleteStudentDetails
    }
};