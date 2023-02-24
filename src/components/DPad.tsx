import React from 'react';
import { XInputControllerInput } from '../models/Mapping';

import './DPad.scss';

interface DPadProps {
    className?: string;
    activeInput: XInputControllerInput | null;
}

const DPad: React.FC<DPadProps> = (props: DPadProps) => {
    const activeInput = props.activeInput || '';

    return (
        <>
            <div id="dpad" className={props.className + ' ' + activeInput.toLowerCase()}>
                <img className="dpad" />
                <svg className="dpad animated-pulse" xmlns="http://www.w3.org/2000/svg"
                    width="3.61111in" height="4.06944in"
                    viewBox="0 0 260 293">
                    <path id="dpad-a" d="M 195.06,174.03 C 204.33,171.17 207.74,181.39 200.94,184.97 195.43,187.88 186.40,180.77 195.06,174.03 Z" />
                    <path id="dpad-b" d="M 214.06,156.03 C 223.33,153.17 226.74,163.39 219.94,166.97 214.43,169.88 205.40,162.77 214.06,156.03 Z" />
                    <path id="dpad-back" d="M 103.11,158.79 C 110.68,158.04 111.12,165.39 105.94,167.22 100.75,169.05 95.97,163.12 103.11,158.79 Z" />
                    <path id="dpad-down" d="M 101.00,220.00 C 101.00,220.00 94.00,220.00 94.00,220.00 92.38,219.97 89.94,220.04 88.60,218.98 83.55,214.98 89.62,196.04 98.31,204.98 99.23,205.93 100.03,207.03 100.48,208.29 101.06,209.89 100.99,212.28 101.00,214.00 101.00,214.00 101.00,220.00 101.00,220.00 Z" />
                    <path id="dpad-leftbumper" d="M 42.31,65.02 C 47.25,63.14 62.88,63.96 69.00,64.00 71.00,64.01 73.98,63.88 75.69,65.02 78.67,67.01 78.67,72.99 75.69,74.98 73.84,76.21 70.19,76.00 68.00,75.84 68.00,75.84 44.06,75.84 44.06,75.84 38.86,74.26 39.24,68.32 42.31,65.02 Z" />
                    <path id="dpad-lefttrigger" d="M 60.31,25.02 C 73.91,19.86 71.00,34.87 71.00,43.00 71.00,45.78 71.42,52.52 69.98,54.69 68.53,56.86 65.40,57.19 63.02,56.85 60.41,56.48 59.03,55.55 58.31,52.94 58.03,51.89 58.02,50.11 58.31,49.00 57.94,45.49 57.63,29.37 58.31,27.15 59.37,25.36 59.53,25.86 60.31,25.02 Z" />
                    <path id="dpad-left" d="M 76.00,209.00 C 76.00,209.00 76.00,202.00 76.00,202.00 76.03,200.38 75.96,197.94 77.02,196.60 81.02,191.55 99.96,197.62 91.02,206.31 90.07,207.23 88.97,208.03 87.71,208.48 86.11,209.06 83.72,208.99 82.00,209.00 82.00,209.00 76.00,209.00 76.00,209.00 Z" />
                    <path id="dpad-leftstickx" d="M 67.00,155.93 C 69.51,155.21 72.25,154.45 74.40,156.60 76.95,159.14 76.32,164.96 72.85,166.40 68.59,168.16 62.20,164.10 62.20,161.00 62.20,158.48 65.18,157.00 67.00,155.93 Z" />
                    <path id="dpad-leftstickxi" d="M 48.31,156.02 C 55.28,153.47 64.24,159.83 56.94,164.97 49.21,170.41 42.13,162.65 48.31,156.02 Z" />
                    <path id="dpad-leftsticky" d="M 57.31,147.02 C 69.00,142.63 68.72,155.73 62.71,159.26 58.62,161.65 51.86,152.88 57.31,147.02 Z" />
                    <path id="dpad-leftstickyi" d="M 60.13,162.34 C 66.64,162.67 69.40,173.03 63.85,175.40 55.91,178.80 50.84,168.52 60.13,162.34 Z" />
                    <path id="dpad-logo" d="M 126.00,152.74 C 142.50,148.80 145.84,168.75 133.00,173.40 126.56,175.73 119.26,169.43 119.10,163.00 118.97,157.79 121.71,155.03 126.00,152.74 Z" />
                    <path id="dpad-rightbumper" d="M 184.31,65.02 C 189.25,63.14 204.88,63.96 211.00,64.00 213.00,64.01 215.98,63.88 217.69,65.02 220.67,67.01 220.67,72.99 217.69,74.98 215.84,76.21 212.19,76.00 210.00,75.84 210.00,75.84 186.06,75.84 186.06,75.84 180.86,74.26 181.24,68.32 184.31,65.02 Z" />
                    <path id="dpad-righttrigger" d="M 190.31,25.02 C 203.91,19.86 201.00,34.87 201.00,43.00 201.00,45.78 201.42,52.52 199.98,54.69 198.53,56.86 195.40,57.19 193.02,56.85 190.41,56.48 189.03,55.55 188.31,52.94 188.03,51.89 188.02,50.11 188.31,49.00 187.94,45.49 187.63,29.37 188.31,27.15 189.37,25.36 189.53,25.86 190.31,25.02 Z" />
                    <path id="dpad-right" d="M 112.00,195.00 C 112.00,195.00 112.00,202.00 112.00,202.00 111.97,203.62 112.04,206.06 110.98,207.40 106.98,212.45 88.04,206.38 96.98,197.69 97.93,196.77 99.03,195.97 100.29,195.52 101.89,194.94 104.28,195.01 106.00,195.00 106.00,195.00 112.00,195.00 112.00,195.00 Z" />
                    <path id="dpad-rightstickx" d="M 168.00,196.93 C 170.51,196.21 173.25,195.45 175.40,197.60 177.95,200.14 177.32,205.96 173.85,207.40 169.59,209.16 163.20,205.10 163.20,202.00 163.20,199.48 166.18,198.00 168.00,196.93 Z" />
                    <path id="dpad-rightstickxi" d="M 149.31,197.02 C 156.28,194.47 165.24,200.83 157.94,205.97 150.21,211.41 143.13,203.65 149.31,197.02 Z" />
                    <path id="dpad-rightsticky" d="M 158.31,188.02 C 170.00,183.63 169.72,196.73 163.71,200.26 159.62,202.65 152.86,193.88 158.31,188.02 Z" />
                    <path id="dpad-rightstickyi" d="M 161.13,203.34 C 167.64,203.67 170.40,214.03 164.85,216.40 156.91,219.80 151.84,209.52 161.13,203.34 Z" />
                    <path id="dpad-start" d="M 152.15,159.07 C 159.46,157.26 161.24,164.54 157.68,166.81 153.75,169.32 145.58,164.82 152.15,159.07 Z" />
                    <path id="dpad-up" d="M 87.00,184.00 C 87.00,184.00 94.00,184.00 94.00,184.00 95.62,184.03 98.06,183.96 99.40,185.02 104.45,189.02 98.38,207.96 89.69,199.02 88.77,198.07 87.97,196.97 87.52,195.71 86.94,194.11 87.01,191.72 87.00,190.00 87.00,190.00 87.00,184.00 87.00,184.00 Z" />
                    <path id="dpad-x" d="M 177.06,156.03 C 186.33,153.17 189.74,163.39 182.94,166.97 177.43,169.88 168.40,162.77 177.06,156.03 Z" />
                    <path id="dpad-y" d="M 195.06,138.03 C 204.33,135.17 207.74,145.39 200.94,148.97 195.43,151.88 186.40,144.77 195.06,138.03 Z" />
                </svg>
            </div>
        </>
    );
};

export default DPad;