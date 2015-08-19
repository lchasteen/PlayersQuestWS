package com.service;


import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.model.Person;
@Path("/user")
public class PersonService {

	@GET
	@Produces("application/json")
	public ArrayList<Person> getPerson(){
		ArrayList<Person>pp = new ArrayList<Person>();
		
		Person p = new Person();
		Person ap = new Person();
		
		Person bp = new Person();
		
		p.setName("Lane Chasteen");
		p.setAge("34");
		p.setDateOfBirth("08/22/1980");
		
		ap.setName("Cezar Lica");
		ap.setAge("42");
		ap.setDateOfBirth("02/22/1968");
		
		bp.setName("Johnny Paulk");
		bp.setAge("21");
		bp.setDateOfBirth("02/03/1996");
		
		pp.add(p);
		pp.add(ap);
		pp.add(bp);
		
		return pp;
	}
}
