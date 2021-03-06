import Dexie from 'dexie';
import {
  CryptoSettingsTable,
  TableType,
  EncryptionMethod,
  DecryptionMethod
} from './types';

export function checkForKeyChange<T extends Dexie>(
  db: T,
  oldSettings: TableType<CryptoSettingsTable<T>> | undefined,
  encryptionKey: Uint8Array,
  encrypt: EncryptionMethod,
  decrypt: DecryptionMethod,
  onKeyChange: (db: T) => any
) {
  try {
    const changeDetectionObj = oldSettings
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        oldSettings.keyChangeDetection
      : null;
    if (changeDetectionObj) {
      decrypt(encryptionKey, changeDetectionObj);
    }
  } catch (e) {
    return Dexie.Promise.resolve(onKeyChange(db));
  }
  return Dexie.Promise.resolve();
}
