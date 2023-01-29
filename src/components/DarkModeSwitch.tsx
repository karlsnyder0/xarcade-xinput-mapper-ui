import { Switch } from '@fluentui/react-components';

interface DarkModeSwitchProps {
    toggle: () => void;
    isDarkMode: boolean;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = (props: DarkModeSwitchProps) => {
  return (
    <>
        <Switch label="Dark Mode" checked={props.isDarkMode ? true : false} onChange={props.toggle} />
    </>
  );
};

export default DarkModeSwitch;