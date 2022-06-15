import Layout from "../../../components/layout";
import './styles.css';

const UploadCandidacy = () => {
    const triggerUpload = () => {
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    }
    return (
        <Layout activeRoute='upload-candidacy'>
            <div className="container">
                <div>
                    <h1>Upload Candidacy</h1>
                    <input type={'file'} hidden={true} id='file-input'accept="image/*" />
                    <button onClick={triggerUpload} style={{marginTop:'1em'}}>Upload Avatar</button>
                    <form>
                        <textarea name="candidacy" id="candidacy" cols="100" rows="10" placeholder="Enter your candidacy here..."></textarea>
                        <button>Submit</button>
                    </form>
                </div>

                
            </div>
        </Layout>
    )
}
export default UploadCandidacy;
