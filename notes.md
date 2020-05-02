# Application State

We want to be able to track Battlemech Pilots assigned to a combat unit, which specific Battlemech each Pilot is assigned to, and ultimately organize Battlemechs and their Pilots into groups called “Lances” and “Companies”.

Notice that we actually have two different slice reducers responding to the same action! Both our unitInfoReducer and our entitiesReducer are responding to the DATA_LOADED action. This is a key concept for Redux usage, which is often misunderstood or ignored. It doesn’t happen by accident, or completely automatically - the combineReducers function we’re using in our rootReducer is specifically calling both slice reducers, and giving them a chance to respond to that action by updating their own slice of data. We could implement the same behavior ourselves, but combineReducers does it for us. (We could also choose not to use combineReducers if we wanted to, and maybe handle things a different way if it made sense.)

Also notice that Redux-ORM automatically stored all the pilots in “normalized” form, by creating an items array for the Pilot type that stores a list of all item IDs, and an itemsById lookup table that stores the actual objects keyed by their IDs.

Redux-ORM allows you to define relations between various model types, using standard database concepts. This is done by adding a fields entry on a Model class type itself, and using the relation operators provided by Redux-ORM. Also, as described previously, when a Model instance is created Redux-ORM will generate getter properties for all fields in the actual data object, as well as all of the relational fields.

With those ideas in mind, we’re almost ready to define our next couple Model types, but first we need to review a bit more information about the ideas we’re trying to represent. In Battletech, there are many different Battlemech designs. Each design has different statistics: weight, speed, armor, weapons, and so on. There may also be different variations on the same design, which would share the same basic characteristics (usually weight and speed), but maybe have some differences in weapons and armor. There can be many different individual mechs of the same design. Here’s some examples of different Battlemech design variants to give you the idea:

- Stinger STG-3R: 20 tons; 6/9/6 movement points (walk/run/jump); 48 armor points; 1 Medium Laser and 2 Machine Guns
- Stinger STG-3G: 20 tons; 6/9/6 movement points; 69 armor points; 2 Medium Lasers
- Warhammer WHM-6R: 70 tons; 4/6 movement points; 160 armor points; 2 PPCs, 2 Medium Lasers, 2 Small Lasers, 1 SRM-6 launcher
- Warhammer WHM-6D: 70 tons; 4/6 movement points; 217 armor points; 2 PPCs, 2 Medium Lasers, 2 Small Lasers
  As a real-life comparison, the F-15 Eagle has several variants: the F-15C is made for air-to-air combat, the F-15D is a training version, the F-15E is intended for ground attacks, and hundreds of individual F-15s have been manufactured.

For our data modeling, we’re going to create two more Model classes. We’re going to need to store information on different Battlemech designs, and we also need to track individual mechs. Rather than copy all the attributes of a design into each individual Mech entry, we can just store the design once, and add a relation between the individual Mech and its design entry. Meanwhile, since Pilots are going to be assigned to Mechs, we would also want to be able to relate Pilots and Mechs to each other.

Based on that, we’re going to create separate models for MechDesigns and Mechs. The Mech class will use “foreign key” relations to point to a MechDesign instance and a Pilot instance. For now, we’ll also add an FK relation from Pilot to Mech so that we can look up the Mech instance that a given Pilot is assigned to. We’ll also go ahead and create parse() methods on them so that we can load them from data. Finally, we’ll add the Mech and MechDesign classes to our ORM instance, the same way we did with Pilot.
