#![no_std] // Indicates that the standard library is not used, which is typical for embedded or contract development.

use soroban_sdk::{contract, contractimpl, contracttype, Env, String, Vec}; // Importing necessary traits and types from the Soroban SDK.

// Define an enumeration to use as a key in the contract's storage.
// Here, we define one variant that will hold a String representing a date.
#[contracttype]
pub enum DataKey {
    Birthdays(String),
}

// Define the main contract type.
// The `#[contract]` attribute indicates that this struct will be used as a smart contract.
#[contract]
pub struct FindBirthdayShares;

// Implementation of the contract.
// The `#[contractimpl]` attribute indicates that the following impl block contains the logic for the contract.
#[contractimpl]
impl FindBirthdayShares {
    // Function to allow a user to submit their name and birthdate.
    // It takes the environment (`env`), user's name, and birthdate as inputs.
    pub fn submit_birthday(env: Env, user: String, date: String) {
        // Create a unique key for the storage using the submitted date.
        let key = DataKey::Birthdays(date.clone());

        // Attempt to retrieve existing birthday records for the given date.
        // If no records are found, initialize a new vector.
        let mut birthdays: Vec<String> = match env.storage().instance().get(&key) {
            Some(names) => names,
            None => Vec::new(&env),
        };

        // Add the user's name to the list of birthdays.
        birthdays.push_back(user);

        // Update the contract's storage with the new list of names for the given date.
        env.storage().instance().set(&key, &birthdays);
    }

    // Function to retrieve a list of names of people who share a birthday on a specified date.
    // It returns a vector of names (strings).
    pub fn get_birthdays(env: Env, date: String) -> Vec<String> {
        // Create a unique key for retrieving the records using the provided date.
        let key = DataKey::Birthdays(date);

        // Retrieve the list of names for the given date from the contract's storage.
        // If no records are found, return an empty vector.
        match env.storage().instance().get(&key) {
            Some(names) => names,
            None => Vec::new(&env),
        }
    }
}
