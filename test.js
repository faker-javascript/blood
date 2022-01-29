import test from 'ava';
import blood from './index.js';

test('blood type return type to be string', t => {
    t.is(typeof blood().type(), 'string');
});

test('blood rh factor return type to be string', t => {
    t.is(typeof blood().rhFactor(), 'string');
});

test('blood group return type to be string', t => {
    t.is(typeof blood().group(), 'string');
});
