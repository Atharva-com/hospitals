import React from 'react'
import { Link } from 'react-router-dom'
export default function ReportForm(props) {
    // const Progress = ()=>{
    //     props.setProgress(100)
    // }
    return (
        <>
        <div className="container report">
            <h1 className="text-center" style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: "2rem",
                                fontWeight: "700",
                            }}>
                Report Your Problem Here
            </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" class="form-label">Write your Problem here and click on sumbit .</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn hosp-list justify-content-center" style={{width: '15rem'}}>
                    <Link to="/" className="btn" onClick={props.setProgress(100)}>Submit Your Problem</Link>
                </button>
            </form>
        </div>
        </>
    )
}
