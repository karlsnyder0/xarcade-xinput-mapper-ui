/* eslint-disable */
import { storiesOf } from '@storybook/react';
import XInputMap from './XInputMap';
import { XInputControllerInput } from '../models/Mapping';

storiesOf('XInputMap', module).add('default', () => (
  <XInputMap label="Trigger" index={0} xInputName={XInputControllerInput.LeftTrigger} value={''} onActive={() => {}} />
));