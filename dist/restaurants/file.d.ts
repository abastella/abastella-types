/**
 * @name File
 * @description Represents a file with various metadata properties.
 * @param comment:       string - A comment or description related to the file.
 * @param date:          string - The date associated with the file, typically in ISO 8601 format.
 * @param downloadURL:   string - The URL from which the file can be downloaded.
 * @param id:            string - A unique identifier for the file.
 * @param invoiceNumber: string - The invoice number associated with the file.
 * @param status?:       string - The status of the file. This property is optional.
 * @param type:          string - The type of the file, typically indicating its format or purpose.
 * @param user:          string - The user ID of the person who uploaded or is associated with the file.
 * @param userEmail:     string - The email address of the user who uploaded or is associated with the file.
 * @param userName:      string - The name of the user who uploaded or is associated with the file.
 */
export interface File {
    comment: string;
    date: string;
    downloadURL: string;
    id: string;
    invoiceNumber: string;
    status?: string;
    type: string;
    user: string;
    userEmail: string;
    userName: string;
}
/**
 * @name Files
 * @description Represent a array of files
 * @param files:  File - A array of files
 */
export interface Files {
    files: File[];
}
