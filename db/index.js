import mongoose from "mongoose";
import 'dotenv/config'

// const url = `mongodb+srv://muhammadjawad:sirGhousPractice@jawadcluster.ghx62cm.mongodb.net/?retryWrites=true&w=majority&appName=jawadCluster`

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jawadcluster.ghx62cm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=jawadCluster`

mongoose.connect(url);

export default mongoose;


