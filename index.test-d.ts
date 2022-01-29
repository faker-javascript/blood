import {expectType} from 'tsd';
import blood from './index.js';

expectType<string>(blood().group());
expectType<string>(blood().rhFactor());
expectType<string>(blood().type());
