CREATE TABLE Providers (
    ProviderID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(100) NOT NULL,
    LastName NVARCHAR(100) NOT NULL,
    Addrss NVARCHAR(150), --address
    Specialty NVARCHAR(150)
);
CREATE TABLE CPT_Codes (
    CPTCode VARCHAR(10) PRIMARY KEY,
    Descript NVARCHAR(MAX) NOT NULL, --description
    Category NVARCHAR(100)
);
CREATE TABLE Clinic_Services (
    ServiceID INT IDENTITY(1,1) PRIMARY KEY,
    ServiceName NVARCHAR(255) NOT NULL,
    Fee DECIMAL(10, 2) NOT NULL,
    CPTCode VARCHAR(10) NOT NULL,
    FOREIGN KEY (CPTCode) REFERENCES CPT_Codes(CPTCode)
);
CREATE TABLE Billed_Events (
    EventID INT IDENTITY(1,1) PRIMARY KEY,
    ServiceID INT NOT NULL,
    ProviderID INT NOT NULL,
    DateOfService DATE NOT NULL,
    BilledAmount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ServiceID) REFERENCES Clinic_Services(ServiceID),
    FOREIGN KEY (ProviderID) REFERENCES Providers(ProviderID)
);
CREATE TABLE Provider_Capabilities (
    ProviderID INT NOT NULL,
    ServiceID INT NOT NULL,
    PRIMARY KEY (ProviderID, ServiceID), 
    FOREIGN KEY (ProviderID) REFERENCES Providers(ProviderID) ON DELETE CASCADE,
    FOREIGN KEY (ServiceID) REFERENCES Clinic_Services(ServiceID) ON DELETE CASCADE
);