import { openDB } from 'idb';


let dbInstance;


//For Creating Db
const getDB = async () => 
    {
    if (!dbInstance) {
      dbInstance = await openDB("Posts", 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("Posts_Table")) {
            db.createObjectStore("Posts_Table", { keyPath: "id", autoIncrement: true });
          }
        },
      });
    }
    return dbInstance;
  };



  //Adding Posts....
  export const addPosts = async (user) => 
   {
  const db = await getDB();
  return db.put("Posts_Table", user);
};

//Deleting Posts....
export const deletePosts = async (id) => 
    {
    const db = await getDB();
    return db.delete("Posts_Table", id);
  };


//Get Posts....
  export const getPosts = async () => {
    const db = await getDB();
    return db.getAll("Posts_Table");
  };
  

  //Update Posts...
  export const updatePosts = async (id, updatedData) => {
    const db = await getDB();
    const user = await db.get("Posts_Table", id);
    if (!user) {
      console.error("User not found!");
      return;
    }
    const updatedUser = { ...user, ...updatedData }; // Merging old & new data.....
    return db.put("Posts_Table", updatedUser);
  }
  ;