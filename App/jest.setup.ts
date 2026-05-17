import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from 'text-encoding';

// Полифиллы для TextEncoder/TextDecoder (нужны для react-router)
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;