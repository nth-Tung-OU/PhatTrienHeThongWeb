import { useState } from "react";
import { Link } from "react-router-dom";

export function RegisterPage() {
    const [email, setEmail] = useState("abc@gmail.com");
    const [username, setUsername] = useState("aaa");
    const [password, setPassword] = useState("123456");

    return (
        <div className="centered-page">
            <div className="card">
                <h1>Đăng ký</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="reg-email">Email</label>
                        <input
                            id = "reg-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-username">Tên người dùng</label>
                        <input
                            id = "reg-username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-password">Mật khẩu</label>
                        <input
                            id = "reg-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn btn--primary">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    );
}