import { Timestamp } from "@firebase/firestore";
/**
 * @name FirestoreLogEventHistory
 * @description Represents the structure of an historical change
 * @param prev: any - Represents the previous value of a field
 * @param new: any - Represents the new value of a field
 */
export interface FirestoreLogEventHistory {
    prev: any;
    new: any;
}
/**
 * @name FirestoreLogEvent
 * @description Represents a LogEvent structure
 * @param userID:     String - UserID stored in the accounts collection
 * @param userEmail:  String - UserEmail stored in the accounts collection
 * @param date:       Timestamp - Firestore representation of a Date value
 * @param values?:    FirestoreLogEventHistory - Represents the actual change of an operation [Optional]
 * @param action:     String - Name of the operation
 */
export interface FirestoreLogEvent {
    userID: string;
    userEmail: string;
    date: Timestamp;
    values?: FirestoreLogEventHistory;
    action: string;
}
