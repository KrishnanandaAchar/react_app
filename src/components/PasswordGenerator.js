import { useEffect, useState } from "react";

// 3rd Party Libraries
import { Button } from "react-bootstrap";

// Utils
import { passwordKeys, allPasswordConfig, passwordCopyStatus } from "../utils/passwordGeneratorHellpers";

const PasswordGenerator = () => {
    const [passwordLength, setPasswordLength] = useState(4);
    const [passwordConfig, setPasswordConfig] = useState([]);
    const [selectedPasswordConfig, setSelectedPasswordConfig] = useState([]);
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [copyPasswordBtn, setCopyPasswordBtn] = useState(passwordCopyStatus.copy);

    useEffect(() => {
        setSelectedPasswordConfig([]);
        passwordConfig.forEach((config) => {
            setSelectedPasswordConfig((prevConfig) => [...prevConfig, ...allPasswordConfig[config]]);
        });
    }, [passwordConfig]);

    const handlePasswordLengthChange = (e) => setPasswordLength(e.target.value);
    const handlePasswordKeySelection = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setPasswordConfig((config) => [...config, value]);
        } else {
            setPasswordConfig(passwordConfig.filter((config) => config !== value));
        }
    };
    const generatePassword = () => {
        let temp = "";
        const selectedPasswordConfigData = selectedPasswordConfig.join("");
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * selectedPasswordConfig.length);
            const passwordChar = selectedPasswordConfigData.charAt(randomIndex);
            temp += passwordChar;
        }
        setGeneratedPassword(temp);
        setCopyPasswordBtn(passwordCopyStatus.copy);
    };
    const copyPassword = () => {
        navigator.clipboard.writeText(generatedPassword);
        setCopyPasswordBtn(passwordCopyStatus.copied);
    };

    return (
        <div className="password-generator-block mb-3 p-3 rounded">
            <h3>Password Generator</h3>
            <div className="d-flex flex-column flex-sm-row">
                <div className="password-controls">
                    {Object.keys(passwordKeys).map((passKey) => (
                        <div key={passwordKeys[passKey].key}>
                            <input type="checkbox" value={passwordKeys[passKey].key} onChange={handlePasswordKeySelection} />
                            <span className="ms-1">{passwordKeys[passKey].name}</span>
                        </div>
                    ))}
                    <div className="mt-2">
                        <small className="d-block">Selected Password Length: {passwordLength}</small>
                        <input type="range" name="points" min="4" max="10" value={passwordLength} onChange={handlePasswordLengthChange} />
                    </div>
                </div>
                <div className="password-block flex-grow-1">
                    <h2 className="mb-2 py-1 px-3">{generatedPassword}</h2>
                    <Button disabled={!passwordConfig.length} variant="warning" onClick={generatePassword} className="me-2 mb-2">
                        Generate Password
                    </Button>
                    {generatedPassword.length > 0 && (
                        <Button variant="info" onClick={copyPassword}>
                            {copyPasswordBtn}
                        </Button>
                    )}
                </div>
            </div>
            {!passwordConfig.length && <p className="m-0">Please select Password Configuration!</p>}
        </div>
    );
};

export default PasswordGenerator;
